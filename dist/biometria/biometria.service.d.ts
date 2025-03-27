import { CreateBiometriaDto } from './dto/create-biometria.dto';
import { UpdateBiometriaDto } from './dto/update-biometria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BiometriaEntity } from './entities/biometria.entity';
export declare class BiometriaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBiometriaDto: CreateBiometriaDto): Promise<BiometriaEntity>;
    findAll(): Promise<BiometriaEntity[]>;
    findOne(bio_id: number): Promise<BiometriaEntity>;
    update(bio_id: number, updateBiometriaDto: UpdateBiometriaDto): Promise<BiometriaEntity>;
    remove(bio_id: number): Promise<BiometriaEntity>;
}
