import React from 'react';
import { createContext } from 'react';
import { Accessor, Update } from 'revejs';

export const createSignalContext = <T extends any>() => createContext<[Accessor<T>, Update<T>]>(undefined as any);