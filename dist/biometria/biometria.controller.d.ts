import { BiometriaService } from './biometria.service';
import { CreateBiometriaDto } from './dto/create-biometria.dto';
import { UpdateBiometriaDto } from './dto/update-biometria.dto';
export declare class BiometriaController {
    private readonly biometriaService;
    constructor(biometriaService: BiometriaService);
    create(createBiometriaDto: CreateBiometriaDto): Promise<import("./entities/biometria.entity").BiometriaEntity>;
    findAll(): Promise<import("./entities/biometria.entity").BiometriaEntity[]>;
    findOne(id: string): Promise<import("./entities/biometria.entity").BiometriaEntity>;
    update(id: string, updateBiometriaDto: UpdateBiometriaDto): Promise<import("./entities/biometria.entity").BiometriaEntity>;
    remove(id: string): Promise<import("./entities/biometria.entity").BiometriaEntity>;
}
