export function toRem(size, base = 16) {
    return size / base + 'rem';
}

export let PROJECTS_API_URL =
    'https://wordpress-741292-2528350.cloudwaysapps.com/wp-json/wp/v2/portfolio-items/';

export let btnStyles = [
    `
    background-color: transparent;
    border: none;
    color: var(--color-text);
    display: inline-block;
    font-family: var(--primary-font);
    font-size: calc(var(--body-text) - 0.25rem);
    letter-spacing: ${toRem(2)};
    margin: ${toRem(40)} 0;
    padding: 0;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;

    &:after {
        background-color: var(--color-text);
        bottom: -8px;
        content: '';
        display: block;
        height: 1px;
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
