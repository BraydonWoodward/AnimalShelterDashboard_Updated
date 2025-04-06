# Use official Node.js runtime as parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code into container
COPY . .

# Expose the backend port
EXPOSE 5000

# Run the seed script to populate the database, then start the server
CMD ["sh", "-c", "node seed.js && npm start"]