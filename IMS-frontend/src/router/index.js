import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/echarts/credit-chart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/home/StudentIndex.vue'),
    redirect: '/student/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard-student',
        component: () => import('@/views/components/student/StudentDashBoard.vue')
      },
      {
        path: 'select-course',
        name: 'select-course-student',
        component: () => import('@/views/components/student/SelectCourse.vue')
      },
      {
        path: 'class-table',
        name: 'class-table-student',
        component: () => import('@/views/components/student/StudentClassTable.vue')
      },
      {
        path: 'teacher-score',
        name: 'teacher-score-student',
        component: () => import('@/views/components/student/TeacherScore.vue')
      },
      {
        path: 'leave',
        name: 'leave-student',
        component: () => import('@/views/components/student/LeavePage.vue')
      },
      {
        path: 'student-score',
        name: 'student-score-student',
        component: () => import('@/views/components/student/StudentScore.vue')
      }
    ]
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('@/views/home/TeacherIndex.vue'),
    redirect: '/teacher/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard-teacher',
        component: () => import('@/views/components/teacher/TeacherDashBoard.vue')
      },
      {
        path: 'course',
        name: 'course-teacher',
        component: () => import('@/views/components/teacher/TeacherCourse.vue')
      },
      {
        path: 'course-time',
        name: 'course-time-teacher',
        component: () => import('@/views/components/teacher/TeacherCourseTime.vue')
      },
      {
        path: 'course-status',
        name: 'course-status-teacher',
        component: () => import('@/views/components/teacher/TeacherCourseStatus.vue')
      },
      {
        path: 'student-score',
        name: 'student-score-teacher',
        component: () => import('@/views/components/teacher/StudentScore.vue')
      },
      {
        path: 'leave',
        name: 'leave-teacher',
        component: () => import('@/views/components/teacher/LeavePage.vue')
      },
      {
        path: 'class-table',
        name: 'class-table-teacher',
        component: () => import('@/views/components/teacher/TeacherClassTable.vue')
      },
      {
        path: 'teacher-score',
        name: 'teacher-score-teacher',
        component: () => import('@/views/components/teacher/MyEvaluation.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/home/AdminIndex.vue'),
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/AdminDashBoard.vue')
      },
      {
        path: 'student-info',
        name: 'student-info',
        component: () => import('@/views/components/StudentInfoPage.vue')
      },
      {
        path: 'course',
        name: 'course',
        component: () => import('@/views/components/CoursePage.vue')
      },
      {
        path: 'teacher-info',
        name: 'teacher-info',
        component: () => import('@/views/components/TeacherInfoPage.vue')
      },
      {
        path: 'exam',
        name: 'exam',
        component: () => import('@/views/components/ExamPage.vue')
      },
      {
        path: 'course-time',
        name: 'course-time',
        component: () => import('@/views/components/CourseTimePage.vue')
      },
      {
        path: 'select-course',
        name: 'select-course',
        component: () => import('@/views/components/SelectCoursePage.vue')
      },
      {
        path: 'class-table',
        name: 'class-table',
        component: () => import('@/views/components/ClassTable.vue')
      },
      {
        path: 'exam-student',
        name: 'exam-student',
        component: () => import ('@/views/components/ExamStudentPage.vue')
      },
      {
        path: 'student-score',
        name: 'student-score',
        component: () => import('@/views/components/StudentScorePage.vue')
      },
      {
        path: 'teacher-score',
        name: 'teacher-score',
        component: () => import('@/views/components/TeacherScorePage.vue')
      },
      {
        path: 'course-status',
        name: 'course-status',
        component: () => import('@/views/components/CourseSelectionStatusPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
