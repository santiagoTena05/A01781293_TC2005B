using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CreateBalls : MonoBehaviour
{
    //Class variable to be changed from the Unity Editor Interface
    [SerializeField] GameObject ball;
    [SerializeField] float delay;
    
    // Start is called before the first frame update
    void Start()
    {
        //Call the 'DropBall' function in 0.5 seconds, then repeat every 0.8 seconds
        InvokeRepeating("DropBall", 0.5f, delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void DropBall(){
        //Generate a new random position
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f), Random.Range(-5.0f, 5.0f), 0);
        //Create a copy of the prefab
        GameObject obj = Instantiate(ball, pos, Quaternion.identity);
        //Doom the object to die in 5 seconds
      
    }

    public void StopBalls()
    {
        CancelInvoke("DropBall");
    }
}