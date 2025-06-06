"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
const formSchema = z.object({
    name: z.string().min(6, { message: 'Companion Name is required' }),
    subject: z.string().min(4, { message: 'Subject is required' }),
    topic: z.string().min(6, { message: 'Topic is required' }),
    voice: z.string().min(2, { message: 'Voice type is required' }),
    style: z.string().min(2, { message: 'Speaking Style is required' }),
    duration: z.coerce.number().min(1, { message: 'Duration is required' }),
})

const CompanionForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form{...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name - ex:Calculus King" {...field} className="input" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="maths">Maths</SelectItem>
                                        <SelectItem value="language">Language</SelectItem>
                                        <SelectItem value="science">Science</SelectItem>
                                        <SelectItem value="history">History</SelectItem>
                                        <SelectItem value="coding">Coding</SelectItem>
                                        <SelectItem value="economics">Economics</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should this companion teach?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter the topic you want to learn - Ex: Derivatives" {...field} className="input" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice Type</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the Voice Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>   
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Speaking Style</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the Speaking Style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="casual">Casual</SelectItem>
                                        <SelectItem value="formal">Formal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                                <Input
                                    min={1}
                                    type="number"
                                    placeholder="15" {...field} className="input" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full cursor-pointer">Build Companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm;