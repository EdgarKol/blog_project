import {
    BaseEntity,
    Entity,
    Column,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import Tag from './Tag';

@Entity()
export default class PostTag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    postId!: string;
    @Column()
    tagId!: string;

    @OneToMany(() => Tag, (tag) => tag.id, {
        createForeignKeyConstraints: true
    })
    tag!: Promise<Tag>;
}

