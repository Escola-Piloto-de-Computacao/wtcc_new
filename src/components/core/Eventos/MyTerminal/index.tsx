"use client";

import React, { Component } from 'react';
import Terminal from 'react-console-emulator';
import { maratonaTerminalCommands } from '@/lib/data';
import { BsInfoCircle } from 'react-icons/bs';

export default class MyTerminal extends Component {
    render() {
        return (
            <div className="flex flex-col gap-2">
                <Terminal
                    commands={maratonaTerminalCommands}
                    promptLabel={'~'}
                />
                <div className="flex gap-1">
                    <BsInfoCircle size={15} />
                    <p className="text-xs text-center">Clique na janela do terminal e digite <span className="italic">help</span> para ver os comandos disponíveis.</p>
                </div>
            </div>
        );
    };
};