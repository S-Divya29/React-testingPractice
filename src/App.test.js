import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

describe("App component",()=>{
    test("has rendered correctly",()=>{
        render(<App />);
        
    })
})