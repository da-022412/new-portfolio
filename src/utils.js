export function toEm(size, base = 16) {
    return size / base + 'em';
}

export let PROJECTS_API_URL =
    'https://admin.dennisacosta.com/wp-json/wp/v2/portfolio-items/';

export let HOME_API_URL =
    'https://admin.dennisacosta.com/wp-json/wp/v2/pages/32';

export let btnStyles = [
    `
    background-color: transparent;
    border: none;
    color: var(--color-text);
    display: inline-block;
    font-family: var(--primary-font);
    font-size: calc(var(--body-text) - 0.25rem);
    letter-spacing: ${toEm(2)};
    margin: ${toEm(40)} 0;
    padding: 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    &:after {
        background-color: var(--color-text);
        bottom: -8px;
        content: '';
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        width: 0;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover:after {
        width: 100%;
    }
`,
];
