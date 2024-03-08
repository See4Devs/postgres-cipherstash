const Sequelize = require("sequelize");

// Replace with your database connection details
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "<your_postgres_host>",
  port: your_postgres_port,
  username: "<your_postgres_username>",
  password: "<your_postgres_password>",
  database: "<your_database_name>",
});

// Define the 'Customer' model
const Customer = sequelize.define(
  "customer_data",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

async function populateData() {
  try {
    // Sample data (30 records)
    const sampleData = [];
    for (let i = 0; i < 30; i++) {
      sampleData.push({
        name: `John Doe ${i + 1}`,
        email: `johndoe${i + 1}@example.com`,
        phone_number: `(123) 456-${i + 1000}`,
      });
    }

    // Insert sample data in bulk
    await Customer.bulkCreate(sampleData);
    console.log("30 sample records inserted");
  } catch (error) {
    console.error("Error populating data:", error);
  } finally {
    sequelize.close(); // Close the database connection
  }
}

populateData()
  .then(() => {
    console.log("Data population completed.");
  })
  .catch((error) => {
    console.error("Error populating data:", error);
    sequelize.close(); // Close the database connection in case of an error
  });

module.exports = { populateData }; // Export the function for potential reuse
