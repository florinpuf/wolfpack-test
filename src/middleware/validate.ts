import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateDto(dtoClass: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        ( async () => {
            const instance = plainToInstance(dtoClass, req.body);
            const errors = await validate(instance, { whitelist: true });

            if (errors.length > 0) {
                const messages = errors.map(err => Object.values(err.constraints || {})).flat();
                return res.status(400).json({ errors: messages });
            }

            req.body = instance; // pass the validated instance forward
            next();
        })().catch(next);
    };
}
