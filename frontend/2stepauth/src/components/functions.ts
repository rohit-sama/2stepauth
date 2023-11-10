import { fetchRedis } from "@/helpers/redis"

export const  getUser = async (username: string) => {
    const dbUserResult = (await fetchRedis('get', `user:${username}`)) as
        | string
        | null
        if(!dbUserResult) {
            return null
        }
      const dbUser = JSON.parse(dbUserResult) as User
      return dbUser
}