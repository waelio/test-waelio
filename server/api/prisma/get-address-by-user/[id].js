export default defineEventHandler(async (event) => {
  const { $dbCon } = useNuxtApp();

  const res = await $dbCon.addresses.findFirst({
    where: { userId: event.context.params.id },
  });
  return res;
});
