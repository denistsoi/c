export default ({
  text,
  name,
  type = 'user',
  profileImage,
  date
}) => ({
  text,
  name,
  type,
  profileImage,
  createdAt: new Date().toISOString(),
  date
})