'use client';

import { configureAssistant, getSubjectColor } from '@/lib/utils';
import { vapi } from '@/lib/vapi.sdk';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import soundwaves from '@/constants/soundwaves.json';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface Message {
    type: string;
    transcriptType?: string;
    role: 'user' | 'assistant';
    transcript: string;
}

interface CompanionComponentProps {
    companionId: string;
    name: string;
    subject: string;
    topic: string;
    userName: string;
    userImage: string;
    style?: object;
    voice: string;
}

const CompanionComponent = ({ companionId, name, subject, topic, userName, userImage, style, voice }: CompanionComponentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [messages, setMessages] = useState<SavedMessage[]>([]);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lottieRef.current) {
            if (isSpeaking) {
                lottieRef.current.play();
            } else {
                lottieRef.current.stop();
            }
        }
    }, [isSpeaking]);

    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        };
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript };
                setMessages((prev) => [newMessage, ...prev]);
            }
        };
        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);
        const onError = (error: Error) => console.error('VAPI Error: ', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        };
    }, []);

    const toggleMicrophone = () => {
        if (callStatus !== CallStatus.ACTIVE) {
            console.log('Cannot toggle microphone: No active call');
            return;
        }
        const currentMuted = vapi.isMuted();
        vapi.setMuted(!currentMuted);
        setIsMuted(!currentMuted);
    };

    const handleCall = () => {
        if (callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED) {
            setCallStatus(CallStatus.CONNECTING);
            const assistantOverrides = {
                variableValues: { subject, topic, style },
                clientMessages: ['transcript'],
                serverMessages: [],
            };
            vapi
                .start(configureAssistant(voice, style), assistantOverrides)
                .catch((error: Error) => {
                    console.error('Failed to start call:', error);
                    setCallStatus(CallStatus.INACTIVE);
                });
        }
    };

    const handleDisconnect = () => {
        if (callStatus === CallStatus.ACTIVE || callStatus === CallStatus.CONNECTING) {
            setCallStatus(CallStatus.FINISHED);
            vapi.stop();
        }
    };

    return (
        <section className="flex flex-col h-[70vh] w-full">
            <section className="flex gap-8 max-sm:flex-col">
                <div className="border-2 border-orange-500 w-2/3 max-sm:w-full flex flex-col gap-4 justify-center items-center rounded-lg p-8">
                    <div className="size-[150px] flex items-center justify-center rounded-lg max-sm:size-[150px]" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <div
                            className={cn(
                                'absolute transition-opacity duration-1000',
                                callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0',
                                callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                            )}
                        >
                            <Image
                                src={`/icons/${subject}.svg`}
                                alt={subject}
                                width={75}
                                height={75}
                                className="max-sm:w-fit"
                            />
                        </div>
                        <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0')}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={soundwaves}
                                autoplay={false}
                                className="companion-lottie"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-2xl">{name}</p>
                </div>
                <div className="user-section">
                    <div className="user-avatar">
                        <Image
                            src={userImage}
                            alt={userName}
                            width={130}
                            height={130}
                            className="rounded-lg"
                        />
                        <p className="font-bold text-2xl">{userName}</p>
                    </div>
                    <button
                        className="btn-mic"
                        onClick={toggleMicrophone}
                        disabled={callStatus !== CallStatus.ACTIVE}
                        aria-label={isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                    >
                        <Image
                            src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'}
                            alt="microphone toggle"
                            width={36}
                            height={36}
                        />
                        <p className="max-sm:hidden">
                            {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                        </p>
                    </button>
                    <button
                        className={cn(
                            'rounded-lg py-2 cursor-pointer transition-colors w-full text-white',
                            callStatus === CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary',
                            callStatus === CallStatus.CONNECTING && 'animate-pulse'
                        )}
                        onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                        aria-label={callStatus === CallStatus.ACTIVE ? 'End session' : 'Start session'}
                    >
                        {callStatus === CallStatus.ACTIVE
                            ? 'End session'
                            : callStatus === CallStatus.CONNECTING
                                ? 'Connecting'
                                : 'Start Session'}
                    </button>
                </div>
            </section>
            <section className="relative flex flex-col gap-4 w-full items-center pt-10 flex-grow overflow-hidden">
                <div className="overflow-y-auto w-full flex flex-col gap-4 max-sm:gap-2 pr-2 text-2xl no-scrollbar">
                    {messages.map((message) => (
                        <p
                            key={message.content}
                            className={cn(
                                'max-sm:text-sm',
                                message.role === 'assistant' ? 'text-black' : 'text-primary'
                            )}
                        >
                            {message.role === 'assistant'
                                ? `${name.split(' ')[0].replace(/[.,]/g, '')}: ${message.content}`
                                : `${userName}: ${message.content}`}
                        </p>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 max-sm:h-20 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />
            </section>
        </section>
    );
};

export default CompanionComponent;