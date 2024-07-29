import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '..';

describe('Deve testar comentários', () => {
    test('Deve inserir dois comentários', () => {
        render(<Post />);

        const textarea = screen.getByTestId('post-comments-form-textarea');
        const button = screen.getByTestId('post-comments-form-button');

        // Adiciona o primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Verifica se o primeiro comentário foi adicionado
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Adiciona o segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Verifica se o segundo comentário foi adicionado
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

        // Verifica se ambos os comentários estão na lista
        const comments = screen.getAllByTestId('post-comment');
        expect(comments).toHaveLength(2);
    });
});
