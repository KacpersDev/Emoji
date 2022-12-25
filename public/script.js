const allEmojies = () => {
    location.href = '/emojies';
}

const randomEmoji = () => {
    location.href = '/emojies/emoji/random';
}

const idEmoji = () => {
    const value = document.getElementById('value').value;
    location.href = '/emojies/' + value;
}
const nameEmoji = () => {
    const name = document.getElementById('name').value;
    location.href = '/emojies/emoji/' + name;
}