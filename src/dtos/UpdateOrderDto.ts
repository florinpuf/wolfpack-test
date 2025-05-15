import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto {
    @IsNumber()
    @IsOptional()
    quantity!: number;
}

export class AdminUpdateOrderDto {
    @IsString()
    @IsNotEmpty()
    @IsEnum(['pending', 'confirmed', 'shipped', 'cancelled'])
    status!: string;
}
