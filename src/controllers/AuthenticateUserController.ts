import { Request, Response } from 'express'
import { AuthenticateUseService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body
    
    const service = new AuthenticateUseService()
    try {
      const result = await service.execute(code)
      return response.json(result)
    } catch (e: any) {
      return response.json({ error: e.message })
    }
  }
}

export { AuthenticateUserController }