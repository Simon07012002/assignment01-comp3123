#Ass1 - comp3123
1. Post - Signup:
http://localhost:3000/api/v1/user/signup
Input:
{
    "username": "a",
    "email": "a@example.com",
    "password": "yourPassword"
}
Output:
  1st send:
{
    "message": "User created successfully.",
    "user_id": "670c6146d306a90708858cb3"
}
  2nd send: 
{
    "error": "Email already exists"
}

3. Post - Login User:
http://localhost:3000/api/v1/user/login
Input:
{
    "username": "Simon",
    "password": "yourPassword"
}
Output:
{
    "message": "Login successful",
    "userId": "670c511eb659c9cec3c1a24e"
}
3. Post - Create Employee:
http://localhost:3000/api/v1/emp/employees
Input:
{
    "first_name":"Alice",
    "last_name":"Johnson",
    "email": "alice.johnson@example.com",
    "position": "Designer",
    "salary": 85000,
    "date_of_joining":"2023-08-10T00:00:00.000Z",
    "department": "Design"
}
Output:
1st send:
{
    "message": "Employee created successfully.",
    "employee_id": "670c5f1c13255aa5364148d2"
}
2nd send:
{
    "error": "E11000 duplicate key error collection: comp3123_assigment1.employees index: email_1 dup key: { email: \"alice.johnson@example.com\" }"
}
4. Get all employees:
http://localhost:3000/api/v1/emp/employees
Output:
[
    {
        "_id": "670c571ecf4aa1fc694567a3",
        "first_name": "Simon",
        "last_name": "Vu",
        "email": "Simon@example.com",
        "position": "Senior Software Engineer",
        "salary": 81000,
        "date_of_joining": "2023-01-01T00:00:00.000Z",
        "department": "Engineering",
        "created_at": "2024-10-13T23:26:22.752Z",
        "updated_at": "2024-10-13T23:26:22.752Z",
        "__v": 0
    },
    {
        "_id": "670c5731cf4aa1fc694567a6",
        "first_name": "Hunter",
        "last_name": "Truong",
        "email": "Hunter@example.com",
        "position": "Software Engineer",
        "salary": 60000,
        "date_of_joining": "2023-01-01T00:00:00.000Z",
        "department": "Engineering",
        "created_at": "2024-10-13T23:26:41.848Z",
        "updated_at": "2024-10-13T23:26:41.848Z",
        "__v": 0
    },
    {
        "_id": "670c5f1c13255aa5364148d2",
        "first_name": "Alice",
        "last_name": "Johnson",
        "email": "alice.johnson@example.com",
        "position": "Senior Designer",
        "salary": 95000,
        "date_of_joining": "2023-08-10T00:00:00.000Z",
        "department": "Design",
        "created_at": "2024-10-14T00:00:28.980Z",
        "updated_at": "2024-10-14T00:00:28.980Z",
        "__v": 0
    },
    {
        "_id": "670c61cbd306a90708858cbb",
        "first_name": "d",
        "last_name": "d",
        "email": "d.johnson@example.com",
        "position": "Designer",
        "salary": 85000,
        "date_of_joining": "2023-08-10T00:00:00.000Z",
        "department": "Design",
        "created_at": "2024-10-14T00:11:55.643Z",
        "updated_at": "2024-10-14T00:11:55.643Z",
        "__v": 0
    }
]

5. Get Employee by EID
http://localhost:3000/api/v1/emp/employees/670c5f1c13255aa5364148d2
Output:
{
    "_id": "670c5f1c13255aa5364148d2",
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com",
    "position": "Senior Designer",
    "salary": 95000,
    "date_of_joining": "2023-08-10T00:00:00.000Z",
    "department": "Design",
    "created_at": "2024-10-14T00:00:28.980Z",
    "updated_at": "2024-10-14T00:00:28.980Z",
    "__v": 0
}
6. Put - Update Employee by EID:
http://localhost:3000/api/v1/emp/employees/670c5f1c13255aa5364148d2
Input:
{
    "position": "Senior Designer",
    "salary": 95000
}
Output:
{
    "message": "Employee details updated successfully."
}
7. Get - ?eid:
http://localhost:3000/api/v1/emp/employees?eid=670c5f1c13255aa5364148d2
Output:
{
    "_id": "670c5f1c13255aa5364148d2",
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com",
    "position": "Senior Designer",
    "salary": 95000,
    "date_of_joining": "2023-08-10T00:00:00.000Z",
    "department": "Design",
    "created_at": "2024-10-14T00:00:28.980Z",
    "updated_at": "2024-10-14T00:00:28.980Z",
    "__v": 0
}
8. Delete employee
http://localhost:3000/api/v1/emp/employees?eid=670c61cbd306a90708858cbb
Output:
1st send:
{
    "message": "Employee deleted successfully."
}
2nd send:
{
    "message": "Employee not found"
}
