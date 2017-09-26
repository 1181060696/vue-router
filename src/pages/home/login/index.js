/**
 * Created by gexuhui on 17/9/21.
 */
export default {
  path: '/login.html',
  name: 'login',
  component: () => import(/* webpackChunkName: "home.login" */'./login')
}
