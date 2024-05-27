"use client";

import React, { Component } from 'react';

import Terminal from 'react-console-emulator';
import { terminalFiles } from '@/lib/data';
import { TerminalFile } from '@/lib/definitions';

interface State {
    currentDirectory: string;
    files: TerminalFile[];
    screenHeight: number;
};
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
        pwd: {
            description: 'Print the current working directory',
            fn: () => {
                const currentDirectory = `$${this.state.currentDirectory}`;
                return currentDirectory;
            }
        },
        cat: {
            description: 'Concatenate files and print on the standard output',
            usage: 'cat [file]',
            fn: (fileName: string) => {
                const { currentDirectory, files } = this.state;
                const file = files.find(file => file.address === currentDirectory && file.name === fileName);
                return file ? `\n${file.content}` : `cat: ${fileName}: No such file or directory`;
            }
        },
        wget: {
            description: 'Download files from the web',
            usage: 'wget [file]',
            fn: (fileName: string) => {

                return `wget [${fileName}]: No such file or directory`;
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

    componentDidMount() {
        // Set screenHeight state here, after the component has been mounted
        this.setState({ screenHeight: window.innerHeight });
    }

    render() {
        return (
            <Terminal
                commands={this.maratonaTerminalCommands}
                promptLabel={'$'}
                autoFocus
                inputTextStyle={{ color: '#d6d6d6' }}
                style={{ height: this.state.screenHeight * 0.55 }}
            />
        );
    };
};