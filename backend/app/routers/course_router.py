from fastapi import APIRouter

router = APIRouter(tags=['course'])

@router.post("/course/create")
def create_course():
    return "xz"

@router.get("/course/get_all")
def get_courses():
    # TODO: вынуть из бд курсы, вернуть их
    return [
        {
        'name': 'Алгем',
        'teacher': 'teacher1',
        'id': 1
        },
        {
            'name': 'Java',
            'teacher': 'teacher2',
            'id': 2
        }]

@router.get("/course/get_mine")
def get_mine_courses():
    # TOOD: посмотреть на курсы пользователя, их вернуть
    return [
        {
        'name': 'Матанализ',
        'teacher': 'teacherrrr',
        'id': 3
        }
    ]