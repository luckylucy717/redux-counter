export default function getRandomColor() {
    const colors = [
        '#495057',
        '#ffe4b5',
        '#7b68ee',
        '#ffc0cb',
        '#ff4500',
        '#2f4f4f',
        '#1e90ff',
        '#4682b4',
        '#32cd32',
        '#daa520'
    ]

    const random = Math.floor(Math.random() * 10);
    return colors[random];
}