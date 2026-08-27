# `eternalspring`

Eternal Spring is a blog about the things I learn and experiment
with during my work and free time. Expect to find writing, notes, and
fragments about software design, machine learning, math, cryptography,
and martial arts.

![The sky in Berlin](./public/berlin-sky.jpeg)

## Usage

The project uses [yarn](https://yarnpkg.com/) as the package manager:

```sh
yarn install
```

Run the project locally:

```sh
yarn run dev
```

The website will be available at `http://localhost:4321/`.

## Styling

### Images

Images can be styled through the markdown image title string by using the **rehype-figure** script.
This script define a parser that split the title string, if it exists, on the `|` character. The first
part is used as the image title, while the second part is used to style the image inline. The
parser expect the style to be formatted as `attribute:value`.

As an example, the following markdown image:

```md
![CDF reflectance](./reflectance-cdf.png "CDF of the reflectance | width=300px")
```

Is rendered in the HTML page as:

```html
<img alt="CDF reflectance" title="CDF of the reflectance" style="width: 300px" ...>
```

If no additional content is provided along with the title after the separation character, the image
is styled according to the default configuration defined in the `global.css` file.
