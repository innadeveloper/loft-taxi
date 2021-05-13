import React from 'react';
import StartForm from './StartForm';
import { render, fireEvent } from '@testing-library/react';

describe('StartForm', () => {
    const mockFunc = jest.fn()

    it('changes form after click', () => {
        
        const { getByTestId, queryByTestId } = render(<StartForm onSubmit={mockFunc} logIn={mockFunc}/>)
     
        expect(getByTestId('form-title').textContent).toBe('Войти');
        expect(queryByTestId('form-name-input')).toBeTruthy();
        
        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Регистрация');
        expect(queryByTestId('form-name-input')).toBeNull();
        
        fireEvent.click(getByTestId('form-change-button'));
        expect(getByTestId('form-title').textContent).toBe('Войти');
        expect(queryByTestId('form-name-input')).toBeTruthy();
    });
});
