import pool from "../config/db.js";

export const createUser = async (username, email, hashedPassword, profileImageUrl) => {
  const query = `
    INSERT INTO users (username, email, password, profileImage)
    VALUES ($1, $2, $3, $4)
    RETURNING id, username, email, profileImage, created_at
  `;
  const values = [username, email, hashedPassword, profileImageUrl];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

export const findUserById = async (id) => {
  const query = `
    SELECT id, username, email, profileImage, created_at 
    FROM users 
    WHERE id = $1
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export const updateUserProfileImage = async (id, profileImageUrl) => {
  const query = `
    UPDATE users
    SET profileImage = $1
    WHERE id = $2
    RETURNING id, username, email, profileImage
  `;
  const { rows } = await pool.query(query, [profileImageUrl, id]);
  return rows[0];
};

export const deleteUser = async (id) => {
  const query = "DELETE FROM users WHERE id = $1 RETURNING id";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
