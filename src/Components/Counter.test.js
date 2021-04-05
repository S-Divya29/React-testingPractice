import React from 'react';
import { render, cleanup,fireEvent} from '@testing-library/react';
import Counter from './Counter';
afterEach(cleanup);

  it('should equal to 0', () => {
    const { getByTestId } = render(<Counter />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

   it('should be enabled', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('increment')).not.toHaveAttribute('disabled')
  });

     
  it('increments counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('increment'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });
  it('should be enabled', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('decrement')).not.toHaveAttribute('disabled')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('decrement'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
  });