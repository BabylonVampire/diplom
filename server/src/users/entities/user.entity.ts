import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    allowNull: false,
    defaultValue: () => uuidv4(),
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isActivated: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  hashedRT?: string;
}
