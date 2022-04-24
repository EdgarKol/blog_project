import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinTable,
    CreateDateColumn
} from "typeorm";
import Post from './Post'
import User from "./User";
type CommentInfo = {
    id: string,
    postId: string,
    parentId: string,
    title: string,
    published: boolean,
    createdAt: Date,
    publishedAt: Date,
    content: string
}


@Entity()
export default class PostComment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('varchar', {length: 75})
    postId!: string;
    @Column('uuid', { nullable: true })
    parentId: string;
    @Column('varchar', { length: 75 })
    title!: string;
    @Column('boolean', { default: false })
    published!: boolean;
    @CreateDateColumn()
    createdAt!: Date;
    @CreateDateColumn()
    publishedAt!: Date;
    @Column('text')
    content!: string;

    @OneToMany(() => User, (user) => user.id,{
        createForeignKeyConstraints: true
    })
    User!: Promise<User>
    @JoinTable()
    users!: User[];

    @OneToOne(() => Post, (post) => post.id, {
        createForeignKeyConstraints: true
    })
    Post!: Promise<Post>

    @JoinTable()
    posts!: Post[];

    commentInfo(){
        return{
            id: this.id,
            postId: this.postId,
            parentId: this.parentId,
            title: this.title,
            published: this.published,
            createdAt: this.createdAt,
            publishedAt: this.publishedAt,
            content: this.content
        }
    }
}
