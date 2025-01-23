import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en el <MultipleCustomHooks/>', () => {

    test('Debe mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Informacion del pokemon'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        expect(nextButton.disabled).toBeTruthy();
        screen.debug();

    });
});
