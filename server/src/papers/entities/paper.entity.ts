import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PaperCreationAttributes {
  title: string;
}

@Table
export class Paper extends Model<Paper, PaperCreationAttributes> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  file?: string;
}
