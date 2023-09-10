# Shipments CRUD Page

**Author**: Ihor Bobulych, Fall 2023

A web application to manage shipments data. This project is built using React, TypeScript, Redux, Redux Thunk middleware, Radix UI, and Axios for data retrieval.

![Screenshot](https://thumbsnap.com/s/bZpLcgy9.png?0910) <!-- Add a screenshot of your application here -->

## Features

- Load shipments data from an API (created own server in `Golang` that returns data from json if provided link will be overloaded).
- Display shipments data in a table.
- Implement a delete button for each shipment.
- Visualize shipment details in a context menu.
- Edit and update shipment details in the context menu (if applicable).

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- Redux Thunk Middleware
- Axios
- Radix UI
- React Spinner

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/bobul/kuehne-nagel-shipments.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage

1. Visit the application in your browser.
2. Load shipments data by fetching from a URL.
3. View, edit, delete shipments in the table and details context menu.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
