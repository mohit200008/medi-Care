# Project Backend

## Table of Content
- [Server Setup](#server-setup)
- [API Documentation](#api-documentation)

---

## Server Setup
1. Clone the repo
```
git clone https://github.com/mohit200008/medi-Care.git
```

2. Move to the backend directory
```
cd medi-Care/backend
```

3. Create a virtual environment
```
python3 -m venv venv
```

4. Enable the virtual environment
```
source venv/bin/activate
```

5. Install the required packages
```
pip install -r requirements.txt
```

6. Create the database
```
python manage.py migrate
```

7. Run the backend server
```
python manage.py runserver
```
8. Now check http://localhost:8000/api/doctors

---

## API Documentation
| Method | Endpoint | description |
|--------|----------|-------------|
| GET | /api/doctors | Get all doctors |
| GET | /api/doctors?specialization=\<specialization\> | Get all doctors with the specified specialization
| POST | /api/doctors | Create a new doctor |
