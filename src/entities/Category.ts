import {
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    ManyToMany
  } from 'typeorm';
  import Post from './Post';
  import User from './User';
  type CategoryInfo = {
    id: string,
    parentId: string,
    title: string,
    metaTitle: string,
    slug: string,
    content: string

  }

  @Entity()
  export default class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('uuid', { nullable: true})
    parentId!: string;
    @Column('varchar', { length: 75 })
    title!: string;
    @Column('varchar', { nullable: true })
    metaTitle?: string;
    @Column('varchar', { default: true})
    slug: string;
    @Column('text')
    content?: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Post)
    posts: Post;

    CategoryInfo(){
      return{
        id: this.id,
        parentId: this.parentId,
        title: this.title,
        metaTitle: this.metaTitle,
        slug: this.slug,
        content: this.content,
      }
    }
  }