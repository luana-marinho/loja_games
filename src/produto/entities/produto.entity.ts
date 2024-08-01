import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string
    
    @IsNumber({maxDecimalPlaces: 2})
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number

    @Column()
    foto: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usario) => usario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}