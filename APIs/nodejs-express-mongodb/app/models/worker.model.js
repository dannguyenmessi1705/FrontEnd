module.exports = (mongoose) => {
  const Worker = mongoose.model(
    "worker",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  return Worker;
};
