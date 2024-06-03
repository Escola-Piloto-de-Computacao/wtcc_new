'use client';

import React, { Component } from 'react';

import Terminal from 'react-console-emulator';
import { motion } from 'framer-motion';

import { terminalFiles } from '@/lib/data';
import { uppV2 } from '@/lib/motion-variants';
import { TerminalFile } from '@/lib/definitions';

interface State { currentDirectory: string; files: TerminalFile[]; screenHeight: number; };
export default class MyTerminal extends Component<{}, State> {

    maratonaTerminalCommands = {
        echo: {
            description: 'Echo text back to the console',
            usage: 'echo [text]',
            fn: (...args: any[]) => {
                return args.join(' ');
            }
        },
        ls: {
            description: 'List directory contents',
            fn: () => {
                const { currentDirectory, files } = this.state;
                const filesInCurrentDirectory = files.filter(file => file.address === currentDirectory);
                return filesInCurrentDirectory.map(file => file.name).join(' ');
            }
        },
        cat: {
            description: 'Concatenate file and print on the standard output',
            usage: 'cat [file]',
            fn: (fileName: string) => {
                const { currentDirectory, files } = this.state;
                const file = files.find(file => file.address === currentDirectory && file.name === fileName);
                return file ? `\n${file.content}` : `cat: ${fileName}: No such file or directory`;
            }
        },
        dwl: {
            description: 'Download files from the terminal',
            usage: 'dwl [file]',
            fn: (fileName: string) => {
                const file = terminalFiles.find(file => file.name === fileName);
                if (file) {
                    const element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file.content));
                    element.setAttribute('download', file.name);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                    return `dwl [${fileName}]: Downloaded`;
                }
                return `dwl [${fileName}]: No such file or directory`;
            }
        },
    };

    constructor(props: any) {
        super(props);
        this.state = {
            currentDirectory: '/',
            files: terminalFiles,
            screenHeight: 1000
        };
    };

    render() {
        return (
            <motion.div initial="hidden" animate="visible" variants={uppV2}>
                <Terminal
                    commands={this.maratonaTerminalCommands}
                    promptLabel={'$'}
                    autoFocus
                    inputTextStyle={{ color: '#d6d6d6' }}
                    className="h-[55vh]"
                />
            </motion.div>
        );
    };
};