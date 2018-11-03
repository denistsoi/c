export default ({
  text,
  name,
  type = 'user',
  profileImage
}) => ({
  text,
  name,
  type,
  profileImage,
  createdAt: new Date().toISOString()
})