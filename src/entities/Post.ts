import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
}
    from 'typeorm'
import User from './User'

@Entity()
export default class Post extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @JoinColumn()
    autorId: string;
    @Column('varchar', { length: 75 })
    title: string
    @JoinColumn()
    authorId: string
    @Column('varchar', { length: 100 })
    metaTitle: string
    @Column('tinytext')
    summary: string;
    @Column('boolean', {default: false})
    published: boolean;
    @Column('text')
    content: string
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.posts)
    author: User
}
