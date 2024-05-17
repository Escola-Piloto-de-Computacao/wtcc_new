"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const schema = z.object({
    email: z.string().email({
        message: 'Email inválido!'
    }),
    question: z.string().min(1, {
        message: 'A pergunta deve ter algum texto!'
    }).max(3000, {
        message: 'Limite de 3000 caracteres atingido!'
    }),
    obs: z.string().optional(),
});

const Fomulario = () => {

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            question: '',
            obs: ''
        }
    });

    function onSubmit(data: z.infer<typeof schema>) {
        console.log(data);
        //TODO enviar para o servidor (api)
    };

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="seuemail@email.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                <FormMessage />
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pergunta</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Escreva sua pergunta aqui..."
                                    {...field}
                                    style={{ resize: "none", height: "200px" }}
                                />
                            </FormControl>
                            <FormDescription>
                                <FormMessage />
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="obs"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Observações</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Escreva suas observações aqui..."
                                    {...field}
                                    style={{ resize: "none", height: "120px" }}
                                />
                            </FormControl>
                            <FormDescription>
                                <FormMessage />
                            </FormDescription>
                        </FormItem>
                    )}

                />
                <Button type="submit">Enviar</Button>
            </form>
        </Form>
    );
};

export default Fomulario;