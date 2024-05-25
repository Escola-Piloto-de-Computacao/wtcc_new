"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
    email: z.string().email({
        message: 'Email inválido!'
    }),
    question: z.string().min(1, {
        message: 'A pergunta deve ter algum texto!'
    }).max(120, {
        message: 'Limite de 120 caracteres atingido!'
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

    async function onSubmit(data: z.infer<typeof schema>) {
        try {
            const faqCollection = collection(firestore, "faq");
            const emailQuery = query(faqCollection, where("email", "==", data.email));
            const querySnapshot = await getDocs(emailQuery);

            if (querySnapshot.size >= 3) {
                toast({
                    title: "Erro",
                    description: "Você já enviou muitas perguntas! Espere um pouco antes de enviar mais.",
                    variant: "destructive",
                    duration: 5250,
                });
                return;
            };

            const docRef = await addDoc(faqCollection, {
                email: data.email,
                question: data.question,
                obs: data.obs
            });

            toast({
                title: "Pergunta enviada",
                description: "Sua pergunta foi enviada com sucesso! Espere um email com a resposta.",
                duration: 5250,
            });

            form.reset({
                email: '',
                question: '',
                obs: ''
            });

        } catch (e) {
            toast({
                title: "Erro",
                description: "Ocorreu um erro ao enviar sua pergunta.",
                variant: "destructive",
                duration: 5250,
            });
        };
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