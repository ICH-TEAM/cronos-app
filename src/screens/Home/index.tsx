// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
// import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import Avatar from '../../assets/svg/Avatar'
import {View, ScrollView, StyleSheet, Text} from 'react-native'
import {Button, CardCourse, Separator} from '../../components'
import GeneralScreen from '../../layouts/GeneralScreen'

import {getCourseService} from '../../services/getCourse'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store/state'
import {CourseID, CourseIDResponseData, Course} from 'src/@types/models'
// import {
//   CompositeScreenProps,
//   NavigatorScreenParams,
// } from '@react-navigation/native'

const gap = 20

// const listCourseInfo = (
//   services: {
//     getOnecourse: (args: CourseID) => Promise<void>
//     getOnecourses: (args: CourseIDResponseData) => Promise<void>
//   },
//   id: string,
//   course: CourseIDResponseData,
// ) => {
//   services.getOnecourse({id})
//   console.log('Course ID:' + id)
//   services.getOnecourses(course)
// }

const Home = ({navigation}: RootTabScreenProps<'Home'>) => {
  const {user, course, loading} = useSelector((state: AppState) => state)
  const dispatch = useDispatch()
  const services = getCourseService(dispatch)
  const listNameCourse = user?.courses.map(cour => {
    return {id: cour.id}
  }) || [{id: ''}]

  //services.getOnecourse({id})
  //services.getOnecourses(listNameCourse)
  //listCourseInfo(services, listNameCourse.id, course)

  // useEffect(() => {
  //   listCourseInfo(services, listNameCourse.id, course)
  // }, [course])

  //console.log('Lista de cursos' + JSON.stringify(listNameCourse, 0, 2))

  // console.log('user: ' + JSON.stringify(user, 0, 2))
  // console.log('course: ' + JSON.stringify(course, 0, 2))
  return (
    <GeneralScreen navigation={navigation.navigate}>
      <View style={styles.container}>
        <View style={styles.userCard}>
          <Avatar gender="male" />
          <View style={styles.avatarInformation}>
            <Text style={styles.avatarName}>
              {user?.name + ' ' + user?.lastName}
            </Text>
            <Text style={styles.avatarSchool}>{user?.career.name}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>{new Date(Date.now()).toDateString()}</Text>
          <Text style={styles.coursesListTitle}>Cursos en el día</Text>
          <View style={styles.coursesList}>
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={0}
            />
            <Separator value={gap} />
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={1}
            />
            <Separator value={gap} />
            <CardCourse
              title="Calculo diferencial"
              code="C1FA3"
              time="10:00 - 12:00"
              index={2}
            />
          </View>
        </View>
      </View>
    </GeneralScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userCard: {
    backgroundColor: '#3C72FF',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  avatar: {
    width: 90,
    height: 90,
  },
  avatarName: {
    fontSize: 30,
    backgroundColor: '#3C72FF',
    fontWeight: '700',
    color: 'white',
  },
  avatarSchool: {
    fontSize: 20,
    backgroundColor: '#3C72FF',
    color: 'white',
    fontWeight: '400',
  },
  avatarInformation: {
    marginLeft: 20,
  },
  content: {
    padding: 25,
  },
  date: {
    fontSize: 23,
  },
  coursesListTitle: {
    fontSize: 25,
    fontWeight: '500',
  },
  coursesList: {
    width: '100%',
    marginTop: 20,
  },
})

export default Home
