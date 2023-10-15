# Date Converter

A versatile JavaScript library for converting Date objects into human-readable, beautifully formatted date strings. Easily integrate it into your projects and applications to display dates in a more user-friendly way.

## Installation

To install the `date2word` library, you can use npm or yarn or pnpm:

```bash
npm install @nexisltd/date2word
# or
yarn add @nexisltd/date2word
# or
pnpm install @nexisltd/date2word
```

## Usage

Here's how you can use the library in your JavaScript or TypeScript code:

```javascript
import dateConverter from 'date2word';

const myDate = new Date();
const formattedDate = dateConverter(myDate,{});

console.log(formattedDate);
```

The `dateConverter` function takes a Date object and provides a variety of formatting options. You can capitalize the month and year, choose between displaying the date or the month first, and more.

## Features

- **Customizable**: Tailor the date format to your needs by specifying various options.
- **Human-Readable**: The library converts dates into user-friendly, natural language strings.
- **Month and Year Formatting**: Control the capitalization of the month and year.
- **Date Order**: Choose whether to display the date or month first in the output.

## Example

```javascript
import dateConverter from 'date2word';

const myDate = new Date('2023-10-15');
const formattedDate = dateConverter(myDate, {
  isCapitalized: true, // Capitalize the month and year
  isDateFirst: true,   // Display the date before the month
});

console.log(formattedDate); // Outputs "Fifteenth October, Twenty Twenty-Three"
```

## Options

- `isCapitalized` (boolean, optional): Capitalize the month and year in the output. Default is `true`.
- `isDateFirst` (boolean, optional): Choose whether to display the date or month first. Default is `true`.

## Acknowledgments

This library relies on the fantastic `number-to-words` package for converting numbers to words. Kudos to their team for their excellent work.

## License

This library is open-source and available under the [MIT License](LICENSE).

---

Feel free to use this library to enhance the date formatting in your projects, and if you have any questions or suggestions, don't hesitate to [open an issue](https://github.com/nexisltd/date2word/issues) or [contribute](https://github.com/nexisltd/date2word/pulls) to its development.

Happy coding! 📅🚀
