import { 
   BaseEntity,
   PrimaryGeneratedColumn,
   Entity,
   Column,
   ManyToOne
}from 'typeorm';

import PostTag from './PostTag';


@Entity()
export default class Tag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('varchar', {length: 75})
    title!: string;
    @Column('varchar', {length: 100})
    metaTitle?: string;
    @Column('varchar', {length: 100})
    slug!: string;
    @Column('varchar', {length: 255})
    content!: string;

    @ManyToOne(() => PostTag, (postTag) => postTag.postId, {
        createForeignKeyConstraints: true
    })
    postTag!: Promise<PostTag>
}