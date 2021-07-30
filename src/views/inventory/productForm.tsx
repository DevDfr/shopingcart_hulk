import { ItemForm } from '../../components/generic/SingleFormComponent';

export const fieldsForm: ItemForm[] = [
    {
        type: 'text',
        label: 'Nombre Producto',
        name: 'title',
        required: true,
        requiredMessage: 'Por favor ingrese Nombre'
    },
    {
        type: 'text',
        label: 'Categoria',
        name: 'category',
        required: true,
        requiredMessage: 'Por favor ingrese Categoria'
    },
    {
        type: 'number',
        label: '($) Valor',
        name: 'price_real',
        required: true,
        requiredMessage: 'Por favor ingrese Valor'
    },
    {
        type: 'text',
        label: 'Peso',
        name: 'net_content',
        required: true,
        requiredMessage: 'Por favor ingrese Peso'
    },
    {
        type: 'number',
        label: 'Unidades x Producto',
        name: 'units_sf',
        required: true,
        requiredMessage: 'Por favor ingrese Unidades'
    },
    {
        type: 'number',
        label: 'Stock Inicial',
        name: 'stock',
        required: true,
        requiredMessage: 'Por favor ingrese Stock'
    },
    {
        type: 'text',
        label: 'Imagen',
        name: 'thumbnail',
        required: true,
        requiredMessage: 'Por favor ingrese Imagen'
    },

]