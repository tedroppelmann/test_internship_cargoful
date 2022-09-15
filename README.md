# Intership test (CARGOFUL)
## Part I (Programming)

Run the following commands:
```
npm install
npm start
```

## Part II (SQL)

* Question 1:

```
SELECT Orders.order_id, (Customers.first_name || ' ' || Customers.last_name) AS customer_name
FROM Customers, Orders
WHERE Customers.customer_id = Orders.customer_id;
```

* Question 2:

```
SELECT Orders.item, AVG(Customers.age) AS average_age
FROM Orders, Customers
WHERE Customers.customer_id = Orders.customer_id
GROUP BY Orders.item
ORDER BY average_age ASC;
```

* Question 3:

```
SELECT Customers.country, SUM(Orders.amount) AS total_amount
FROM Orders, Customers
WHERE Customers.customer_id = Orders.customer_id
GROUP BY Customers.country
ORDER BY total_amount DESC;
```