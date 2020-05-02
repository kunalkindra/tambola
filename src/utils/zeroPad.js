export default function zeroPad(number) {
  return number < 10 ? `0${number}` : number;
}
