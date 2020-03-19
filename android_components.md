# Android "Components"

## Broadcast Receiver

### Inplicit

On register le broadcast receiver dans le manifest.xml, il va donc se lancer tout seul, sans avoir besoin de l'appeler, exactement comme une Activity:

```xml
<!-- permission pour pouvoir utiliser le boot dans l'intent filter -->
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" /> 
...
<!-- pour le broadcast receiver lui meme -->
<receiver android:name=".MyBroadcastReceiver">
    <intent-filter>
        <action-filter>
            <action android:name="android.intent.action.BOOT_COMPLETED" />
        </intent-filter>
</receiver>
```

Et la classe qui sera lancée sera ma classe MyBroadcastReceiver:

```java
public class MyBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent){
        if(Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())){
            Toast.makeText(context, "Boot completed", Toast.LENGTH_LONG).show();
        }
    }
}
```

---

## Work Manager

Classe a préférer pour faire tout travail en arriere plan type téléchargement de photos, etc.. des taches assez longues généralement, qui doivent pouvoir s'exécuter en arrier plan.
Il faut créer notre classe qui étend Worker:

```java
public class BackgroundPhotoUploader extends Worker {
    public BackgroundPhotoUploader(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        // do the work here -- in this case, upload the images

        uploadImages();


        return Result.success();
    }

    private void uploadImages(){
        Log.d("TAG", "uploading photos");
    }
}
```

Et dans notre MainActivity:

```java
Context context = getApplicationContext();

// on construit notre tache
OneTimeWorkRequest myTask = new OneTimeWorkRequest.Builder(BackgroundPhotoUploader.class).build();
// on recupere l'instance du workmanager car on va mettre notre tache dedans
WorkManager workManager = WorkManager.getInstance(context);

// lance concretement la tache
workManager.enqueue(myTask);

// etre averti lorsque le workManager aura fini notre task.
WorkManager.getInstance(context).getWorkInfoByIdLiveData(myTask.getId()).observe(this, new Observer<WorkInfo>() {
    @Override
    public void onChanged(WorkInfo workInfo) {
        if(WorkInfo.State.SUCCEEDED.equals(workInfo.getState())){
            Log.d("TAG", "finished");
        }
    }
});
```

---

### RecyclerView

dans MainActivity.java:
```java
private RecyclerView recyclerView;
private RecyclerView.Adapter mAdapter; // nécessaire la recycle view
private RecyclerView.LayoutManager mLayoutManager; // pour aligner correctement les items => va creer la ListView

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);


    ArrayList<ExampleItem> exampleList = new ArrayList<>();
    exampleList.add(new ExampleItem(R.drawable.ic_launcher_background, "hello1 ")) ;
    exampleList.add(new ExampleItem(R.drawable.ic_launcher_background, "hello2 ")) ;
    exampleList.add(new ExampleItem(R.drawable.ic_launcher_background, "hello3 ")) ;
    exampleList.add(new ExampleItem(R.drawable.ic_launcher_background, "hello4 ")) ;

    recyclerView=findViewById(R.id.myRecyclerView);
    recyclerView.setHasFixedSize(true);
    mLayoutManager= new LinearLayoutManager(this);
    mAdapter = new ExampleAdapter(exampleList);

    recyclerView.setLayoutManager(mLayoutManager);
    recyclerView.setAdapter(mAdapter);

}
```

Il faut créer la classe d'items (non décrit ici) et une extention de RecyclerView.Adapter:
Dans ExampleAdaptater.java

```java
public class ExampleAdapter extends RecyclerView.Adapter<ExampleAdapter.ExampleViewHolder> {

    private ArrayList<ExampleItem> exampleList;

    public static class ExampleViewHolder extends RecyclerView.ViewHolder{
        public ImageView mImageView;
        public TextView mTxtView;

        public ExampleViewHolder(@NonNull View itemView) {
            super(itemView);
            mImageView = itemView.findViewById(R.id.imageView);
            mTxtView = itemView.findViewById(R.id.txtView);
        }
    }

    public ExampleAdapter(ArrayList<ExampleItem> exampleList){
        this.exampleList = exampleList;
    }


    @NonNull
    @Override
    public ExampleViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.card_view, parent, false);
            ExampleViewHolder evh = new ExampleViewHolder(v);
            return evh;
    }

    @Override
    public void onBindViewHolder(@NonNull ExampleViewHolder holder, int position) {
        ExampleItem currentItem = exampleList.get(position);
        holder.mImageView.setImageResource(currentItem.getmImageResource());
        holder.mTxtView.setText(currentItem.getText1());

    }

    @Override
    public int getItemCount() {
        return exampleList.size();
    }
}
```



