import {
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne
} from 'typeorm';
import Category from './Category';
import User from './User';
import PostComment from './PostComment';

@Entity()
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column('varchar', { length: 75 })
  title!: string;
  @Column()
  authorId!: string;
  @Column('uuid', {nullable: true})
  parentId?: string;
  @Column('varchar', { length: 100 })
  metaTitle?: string;
  @Column('tinytext')
  summary!: string;
  @Column('boolean', { default: false })
  published!: boolean;
  @Column('text')
  content!: string;
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    createForeignKeyConstraints: true
  })
  author!: Promise<User>;

  @OneToOne(() => PostComment, (PostComment) => PostComment.postId,{
    createForeignKeyConstraints: true
  })
  PostComment!: Promise<PostComment>

  // Parent post
  @OneToMany(() => Post, (post) => post.parentId, {
    createForeignKeyConstraints: true
  })
  parentPost?: Promise<User>;

  @ManyToMany(()=> Category)
  @JoinTable()
  categories!: Category[];
}